import React from 'react'
import Link from 'next/link'

export interface paginatorType {
  currentPage: number,
  total: number,
  limit: number,
  path: string,
  number?: number
}
class PagerAbstract extends React.Component<paginatorType> {
  firstPageNumber: number
  lastPageNumber: number
  paramName: string
  content: string

  constructor(props: paginatorType) {
    super(props)

    this.firstPageNumber = 1
    this.lastPageNumber = this.calcLastPageNumber()
    this.paramName = 'page'
    this.content = ''
  }

  calcLastPageNumber(): number {
    return PagerAbstract.calcLastPageNumber(this.props.total, this.props.limit)
  }

  static calcLastPageNumber(total: number, limit: number) {
    const [div, mod] = [total / limit, total % limit]
    return parseInt(mod === 0 ? div.toString() : (div + 1).toString())
  }

  isFirst(): boolean {
    return this.props.currentPage <= this.firstPageNumber
  }

  isLast(): boolean {
    return this.props.currentPage >= this.lastPageNumber
  }

  isDisabled(): boolean {
    return false  // have to implement
  }

  linkPageNumber(): number {
    return -1  // have to implement
  }

  linkPath(): string {
    return `${this.props.path}?${this.paramName}=${this.linkPageNumber()}`
  }

  disableComponent() {
    return this.buttonComponent(false, true)
  }

  roundedDirection(): string {
    return 'rounded-none'
  }

  linkComponent() {
    return (
      <Link href={this.linkPath()} passHref>
        {this.buttonComponent()}
      </Link>
    )
  }

  buttonComponent(isActive = false, isDisabled = false) {
    let cssClass = ''
    if (isActive) cssClass += 'bg-gray-300/20'
    if (isDisabled) cssClass += 'bg-gray-600/20'
    if (!isActive && !isDisabled) cssClass += 'hover:opacity-75'

    return (
      <button className={`py-2 px-4 bg-gray-400/20 ${this.roundedDirection()} ${cssClass}`} disabled={isDisabled}>{this.content}</button>
    )
  }

  render(): React.ReactNode {
    if (this.isDisabled()) return this.disableComponent()

    return this.linkComponent()
  }
}
class FirstPage extends PagerAbstract {
  constructor(props: paginatorType) {
    super(props)
    this.content = '<<'
  }

  isDisabled(): boolean {
    return this.isFirst()
  }

  roundedDirection(): string {
    return 'rounded-l-md'
  }

  linkPageNumber(): number {
    return this.firstPageNumber
  }
}
class PreviousPage extends PagerAbstract {
  constructor(props: paginatorType) {
    super(props)
    this.content = '<'
  }

  isDisabled(): boolean {
    return this.isFirst()
  }

  linkPageNumber(): number {
    return this.props.currentPage - 1
  }
}
class NextPage extends PagerAbstract {
  constructor(props: paginatorType) {
    super(props)
    this.content = '>'
  }

  isDisabled(): boolean {
    return this.isLast()
  }

  linkPageNumber(): number {
    return this.props.currentPage + 1
  }
}
class LastPage extends PagerAbstract {
  constructor(props: paginatorType) {
    super(props)
    this.content = '>>'
  }

  isDisabled(): boolean {
    return this.isLast()
  }

  linkPageNumber(): number {
    return this.lastPageNumber
  }

  roundedDirection(): string {
    return 'rounded-r-md'
  }
}
class NumberPager extends PagerAbstract {
  constructor(props: paginatorType) {
    super(props)
    if (!this.props.number && this.props.number !== 0) throw new Error('numberStr paramers is blank.')

    this.content = String(this.props.number)
  }

  linkPageNumber(): number {
    return this.props.number || -1
  }

  isActive(): boolean {
    return this.props.currentPage === this.props.number
  }

  activeComponent() {
    return this.buttonComponent(true, false)
  }

  render(): React.ReactNode {
    if (this.isActive()) return this.activeComponent()

    return this.linkComponent()
  }
}
export {
  FirstPage,
  PreviousPage,
  NextPage,
  LastPage,
  NumberPager
}
