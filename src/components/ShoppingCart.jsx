import React from 'react'
import ShoppingCard from './ShoppingCard'

const ShoppingCart = () => {

    const datas = [
        {
            name: 'Nike Runner',
            image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?cs=srgb&dl=pexels-craytive-1456706.jpg&fm=jpg',
            cost:"234",
        },
        {
            name: 'nike white sneaky',
            image: 'https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=L725fuzFTnm6qEaqE7Urc5q6IR80EgYQEjBn_qtBIQg=',
            cost:"499",
        },
        {
            name:"nike high top",
            image:"https://images.unsplash.com/photo-1670105084645-d4e3c9800776?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cost:"649",
        },
        {
            name:"nike casual",
            image:"https://images.pexels.com/photos/13580544/pexels-photo-13580544.jpeg?auto=compress&cs=tinysrgb&w=600",
            cost:"299",
        },
        {
            name:"nike wing",
            image:"https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            cost:"449",
        },
        {
            name:"nike air",
            image:"https://images.pexels.com/photos/9251961/pexels-photo-9251961.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            cost:"799",
        }
    ]


  return (
    <div className=' w-full flex flex-col items-center justify-center bg-secondary'>
        <h1 className='text-text  font-semibold text-[30px] md:text-[32px] p-10'>Shopping Cart</h1>
        <div className='w-full h-full pt-10 p-1 items-center justify-center md:w-[75%] flex flex-wrap gap-3'>
            {
                datas.map((data, i) => {
                    return (
                        <ShoppingCard
                            key={i} 
                            name={data.name}
                            image={data.image}
                            cost = {data.cost}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default ShoppingCart