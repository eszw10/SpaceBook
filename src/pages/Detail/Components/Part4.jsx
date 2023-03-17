import { useState } from "react";
import Rating from "../../../components/Modal/Rating";
import Comment from "../../../components/Review/Comment"
import comments from "../../../data/comments"

const Part4 = ({data}) => {
    const [modal,setModal] = useState(false);
    const modalHandler= () => setModal(!modal)
  return (
    <div className="mx-5 md:mx-20 flex">
        <div className="contain flex flex-col gap-3">
            <div className="header flex gap-3 w-[70%]">
                <h2 className="font-semibold text-2xl md:text-3xl">Review</h2>
                <img src="/assets/icons/add.svg" alt="" className="cursor-pointer w-[30px]" onClick={modalHandler}/>
            </div>
            <div className="review flex flex-col gap-3">
                {comments.map(comment=> (
                    <Comment data={comment} key={comment.id} rate={data.rating}/>
                ))}
            </div>
        </div>
        {modal && <Rating handler={modalHandler} data={data}/>}
    </div>
  )
}

export default Part4