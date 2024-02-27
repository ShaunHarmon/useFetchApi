import React, {FC} from 'react'
import { Card, Post } from '../Card/Card'

export type CardListProps = {
    list: Post[]
}

const CardList: FC<CardListProps> = (props) =>{
    const {list} = props
    return <>
        {list.map && list.map((item: Post)=>{
            return <Card  post={item}/>
        })}
    </>
}

export {CardList}