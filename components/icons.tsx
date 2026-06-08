import type { ReactNode } from 'react'

type IconName = 'bulb' | 'phone' | 'grid' | 'target' | 'person' | 'star' | 'shield' | 'clock' | 'check' | 'briefcase'

export function Icon({ name }: { name: string }) {
  const icons: Record<IconName, ReactNode> = {
    bulb: <><path d="M9.5 8.5a2.5 2.5 0 1 1 5 0c0 1.1-.5 1.8-1.2 2.4-.8.7-1.3 1.4-1.3 2.6" /><path d="M9.5 18h5" /><path d="M8.8 3.8 10 5.7" /><path d="M15.2 3.8 14 5.7" /></>,
    phone: <path d="M22 16.9v2.3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 3 4.4 2 2 0 0 1 5 2.2h2.3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L8 10a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z" />,
    grid: <><rect height="7" rx="2" width="7" x="3" y="4" /><rect height="7" rx="2" width="7" x="14" y="4" /><rect height="7" rx="2" width="7" x="3" y="13" /><path d="M17.5 14v6" /><path d="M14.5 17h6" /></>,
    target: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2" /><path d="M17 7 7 17" /></>,
    person: <><circle cx="12" cy="8" r="4" /><path d="M4 20a8 8 0 0 1 16 0" /></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9L12 3Z" />,
    shield: <><path d="M12 21s7-3.5 7-8.7V6.3L12 3 5 6.3v6c0 5.2 7 8.7 7 8.7Z" /><path d="m9 12 2 2 4-4" /></>,
    clock: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
    briefcase: <><rect height="11" rx="2" width="16" x="4" y="7" /><path d="M9 7V5h6v2" /></>,
  }
  return <span className="icon-circle"><svg aria-hidden="true" viewBox="0 0 24 24">{icons[(name as IconName) in icons ? (name as IconName) : 'check']}</svg></span>
}
