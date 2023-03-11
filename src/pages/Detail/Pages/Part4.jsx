import Comment from "../../../components/Review/Comment"
import comments from "../../../data/comments"

const Part4 = () => {
  return (
    <section className="mx-20 flex justify-between mt-20">
        <div className="contain flex flex-col gap-3">
            <div className="header flex justify-between w-[70%]">
                <h2 className="font-medium text-3xl">Review</h2>
                <img src="/assets/icons/add.svg" alt="" />
            </div>
            <div className="review flex flex-col gap-3">
                {comments.map(comment=> (
                    <Comment data={comment} key={comment.id}/>
                ))}
            </div>
        </div>
        <div className="contact flex flex-col gap-3">
            <h2 className="font-medium text-3xl">Contact</h2>
            <div className="icons flex flex-col gap-3">
                <div className="icon1 flex gap-2">
                    <img src="/assets/icons/wa-or.svg" alt="" />
                    <p className="font-medium text-xl">+62 812-1682-7318</p>
                </div>
                <div className="icon3 flex gap-2">
                    <img src="/assets/icons/ig-or.svg" alt="" />
                    <p className="font-medium text-xl">@ezospace</p>
                </div>
                <div className="icon3 flex gap-2">
                    <img src="/assets/icons/gmail-or.svg" alt="" />
                    <p className="font-medium text-xl">@ezospace11@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Part4