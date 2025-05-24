'use client'
import CompleteStudent from '@/components/CompleteStudent'
import CompleteTeacherProfile from '@/components/CompleteTeacherProfile'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const role = useSelector(state=> state.role)
  return (
    <>
    {role == "student" && <CompleteStudent />}
    {role == "teacher" && <CompleteTeacherProfile />}
    </>
  )
}

export default page