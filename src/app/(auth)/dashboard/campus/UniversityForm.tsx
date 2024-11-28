'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { University } from '@/types/card'
import { createUniversity, updateUniversityAction } from './universityActions'

interface UniversityFormProps {
  university?: University
}

export default function UniversityForm({ university }: UniversityFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<Omit<University, 'id'>>(
    university || {
      name: '',
      acronym: '',
      email: '',
      phone: '',
      address: '',
      director: ''
    }
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (university) {
      await updateUniversityAction(university.id, formData)
    } else {
      await createUniversity(formData)
    }
    router.push('/dashboard')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{university ? 'Edit University' : 'Add New University'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="acronym">Acronym</Label>
            <Input
              type="text"
              id="acronym"
              name="acronym"
              value={formData.acronym}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="director">Director</Label>
            <Input
              type="text"
              id="director"
              name="director"
              value={formData.director}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">
            {university ? 'Update' : 'Create'} University
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

