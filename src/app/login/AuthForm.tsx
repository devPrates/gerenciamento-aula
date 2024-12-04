"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function UserAuthForm() {
    return (
        <div className="" >
            <form className="flex flex-col gap-2">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Nome@ifms.edu.br"/>
                </div>
                <div>
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" placeholder="***"/>
                </div>

                <Link href="/dashboard" >
                    <Button className="mt-3 min-w-full">Login</Button>
                </Link> 
            </form>
        </div>
    )
}