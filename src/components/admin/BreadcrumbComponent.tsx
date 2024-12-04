import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { BreadcrumbProps } from '@/types/breadcrumb'

export function BreadcrumbComponent({ items }: BreadcrumbProps) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <BreadcrumbItem key={item.href}>
                        {index === items.length - 1 ? (
                            <>
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                <span aria-hidden="true" className="mx-2 inline-block">
                                    <ChevronRight className="h-4 w-4" />
                                </span>
                            </>
                        ) : (
                            <>
                                <BreadcrumbLink asChild>
                                    <Link href={item.href}>{item.label}</Link>
                                </BreadcrumbLink>
                                <span aria-hidden="true" className="mx-2 inline-block">
                                    <ChevronRight className="h-4 w-4" />
                                </span>
                            </>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

