"use client"

import EmptyState from "@/app/components/EmptyState"
import React, { FC, useEffect } from "react"

interface ErrorStateProps {
  error: Error
}

const ErrorState: FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <EmptyState title="Oh No :(" subtitle="Something went wrong!" />
}

export default ErrorState
