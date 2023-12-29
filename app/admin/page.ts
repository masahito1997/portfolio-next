import { redirect } from 'next/navigation'

const AdminRoot = () => {
  redirect('/admin/posts')
}
export default AdminRoot
