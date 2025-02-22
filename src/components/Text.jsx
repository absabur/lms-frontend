'use client'
import { setTestAction } from '@/app/store/Action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Text = () => {
    const dispatch = useDispatch()
    const content = useSelector(state => state.content)
    useEffect(() => {
        dispatch(setTestAction("hello world"))
    }, [])
    console.log(content)
    
  return (
    <div>text</div>
  )
}

export default Text