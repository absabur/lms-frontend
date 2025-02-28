import Link from "next/link"

const page = () => {
  return (
    <div>
        <Link href="/login/teacher">Login As Teacher</Link><br />
        <Link href="/login/student">Login As Student</Link>
    </div>
  )
}

export default page