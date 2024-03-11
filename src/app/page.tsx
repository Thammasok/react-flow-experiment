import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Lists
      <ul>
        <li>
          <Link href='/simple'>simple</Link>
        </li>
      </ul>
    </div>
  )
}
