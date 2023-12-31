import Link from 'next/link'
import useApiClient from '../../../src/lib/api_client'

type BlogType = {
  title: string
  handle: string
  tags: string[]
  updatedAt: string
}
const getBlogs = async (page: number) => {
  try {
    const client = useApiClient()
    return await client.get('/admin/articles', { page: page }) as BlogType[]
  } catch (e) {
    console.log(e)
    return []
  }
}

type AdminPostsSearchParams = {
  searchParams: {
    page?: string
  }
}
const AdminPosts = async ({ searchParams }: AdminPostsSearchParams) => {
  const blogs = await getBlogs(Number(searchParams.page || '1'))

  return (
    <>
      <div className='flex justify-between items-center mb-6 mt-10'>
        <h1 className='font-bold text-xl'>ブログ一覧</h1>
        <Link href='./posts/new'>
          <button type="button"
                  className="text-white focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
            新規作成
          </button>
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">タイトル</th>
              <th scope="col" className="px-6 py-3">タグ</th>
              <th scope="col" className="px-6 py-3">公開日</th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">編集</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(({ title, handle, tags, updatedAt }) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={title}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-col">
                  <p className='text-sm opacity-75'>id: {handle}</p>
                  <p className='text-lg mt-1'>{title}</p>
                </th>
                <td className="px-6 py-4">
                  {tags.join(",")}
                </td>
                <td className="px-6 py-4">
                  {updatedAt}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href={`./posts/${handle}/edit`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">編集</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default AdminPosts
