import Link from 'next/link'
import Image from 'next/image'
import { RoundedButton } from 'src/components/rounded-button'
import { useState, useContext } from 'react'
import { AppContext } from 'src/contexts/main'
import PlusCircle from 'src/components/icons/outline/PlusCircle'
import { MouseEvent } from 'react'
import { ProductCardFragment } from 'src/types/shopify'


export const ProductCard: React.FC<{data: ProductCardFragment}> = ({ data }) => {
  const [hover, setHover] = useState(false)
  const { state, dispatch } = useContext(AppContext)

  function addProduct (event: MouseEvent) {
    // stop click event bubbling to Link
    event.preventDefault()
    dispatch({ type: 'ADD', id: data.id, price: 1, variant: 'asd' })
    
  }

  return <Link href={`/products/${data.id}`}>
    <div className="rounded-xl relative bg-white hover:shadow-xl hover:border-purple-400 border-2 border-white hover:border-opacity-75 p-3 cursor-pointer">
      <div className="absolute top-3 right-3 z-50">
        <RoundedButton onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={addProduct}>
          <PlusCircle />
        </RoundedButton>
      </div>
      <div className="w-full h-64 relative">
        <Image src={data.images.edges[0].node.src} layout="fill" objectFit="contain" />
      </div>
    </div>
  </Link>
}
