import React, { FC } from "react"
import './Card.css'

export interface Post {
    id: string,
    title: string,
    body: string
}

export type CardProps = {
    post: Post
}

const Card: FC<CardProps> = (props)=>{
    const {title, body} = props.post

    return <div className="card-container">
        <h3 className="title">{title}</h3>
        <p>{body}</p>
    </div>
}

export {Card}