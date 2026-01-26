"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Icon } from "@/components/ui/Icon"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="p-2 rounded-full hover:bg-foreground/5 transition-colors">
                <Icon name="Sun" className="w-5 h-5 text-foreground opacity-50" />
            </button>
        )
    }

    const isDark = theme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors relative"
            title="Toggle Theme"
        >
            <Icon
                name="Sun"
                className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground"
            />
            <Icon
                name="Moon"
                className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground"
            />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
