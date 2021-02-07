import s from './Friends.module.css'
import React from "react";

let Friends = (props) => {
    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={s.pages}>
                {pages.map(p => {
                    if (p <= 20) {   // decrease number of pages!!
                        return <a className={props.currentPage === p && s.selected} onClick={() => {
                            props.changePage(p)
                        }}> {p} </a>
                    }
                })}
            </div>
            {
                props.friends.map(f =>
                    <div>
                        <span>
                            <div>
                                <img
                                    src={f.photos.small != null ? f.photos.small : 'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg'}
                                    alt="Ava" className={s.ava}/>
                            </div>
                            <div>
                                {f.Followed
                                    ? <button onClick={() => props.unfollow(f.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(f.id)}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{f.name}</div>
                                <div>{f.status}</div>
                            </span>
                            <span>
                                <div>
                                    {"f.location.city"}
                                </div>
                                <div>
                                    {"f.location.country"}
                                </div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    )
}
// const Friends = (props) => {
//     if(props.friends.length==0) {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
//             props.setFriends(response.data.items)
//         })
//         // props.setFriends([
//         //     {id: 1, fullName: 'Dasha', status: 'online', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg', location:{city: 'Dnipro', country:'Ukraine'}, isFollowed: true},
//         //     {id: 2, fullName: 'Den', status: 'last seen recently', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg', location:{city: 'Kyiv', country:'Ukraine'}, isFollowed: true},
//         //     {id: 3, fullName: 'Max', status: 'online', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg',location:{city: 'Dnipro', country:'Ukraine'}, isFollowed: true},
//         //     {id: 4, fullName: 'Liza', status: 'last seen 2 hours ago', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg',location:{city: 'Lviv', country:'Ukraine'}, isFollowed: true}
//         // ]);
//     }
//     return (
//         props.friends.map(f =>
//         <div>
//         <span>
//             <div>
//                 <img src={f.photos.small!=null?f.photos.small:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg'} alt="Ava" className={s.ava}/>
//             </div>
//             <div>
//                 {f.Followed
//                     ? <button onClick={() => props.unfollow(f.id)}>Unfollow</button>
//                     :<button onClick={() => props.follow(f.id)}>Follow</button>
//                 }
//             </div>
//         </span>
//         <span>
//             <span>
//                 <div>{f.name}</div>
//                 <div>{f.status}</div>
//             </span>
//             <span>
//                 <div>
//                     {"f.location.city"}
//                 </div>
//                 <div>
//                     {"f.location.country"}
//                 </div>
//             </span>
//
//         </span>
//         </div>
//         )
//     )
// }

export default Friends;