import Link from "next/link"

const page = () => {
  return (
    <div>
        <Link href="/signup/teacher">Create Teacher Account</Link><br />
        <Link href="/signup/student">Create Student Account</Link><br />
    </div>
  )
}

export default page