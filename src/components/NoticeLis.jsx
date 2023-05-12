import React from "react"
//이벤트게시판리스트

function NoticeList({ txt, date }) {
    return (
        <div>
            <b>{txt}</b><span>{date}</span>
        </div>
    )
}
export default NoticeList;