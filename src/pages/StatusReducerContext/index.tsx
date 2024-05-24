import { useState, useEffect, useRef } from 'react'
import TaskProvider from './taskContext'
import AddTask from './AddTask'
import TaskList from './TaskList'
import './index.scss'

export default function StatusReducerContext() {
  return (
    <TaskProvider>
      <h1>列表展示</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  )
}

