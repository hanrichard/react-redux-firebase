import React from 'react';
import moment from 'moment'

const Notification = (props) => {
    const {notifications} = props
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                <div className="card-title">notifications</div>
                <ul className="">
                    {
                        notifications && notifications.map(
                            notification => {
                                return (
                                    <li key={notification.id}>
                                        { notification.user }
                                        { notification.content }
                                        { moment(notification.time.toDate()).fromNow }
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification