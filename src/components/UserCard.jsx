const UserCard = ({user, deleteUserById, setUpdateInfo, setIsCloseForm}) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleEdit = () => {
        setUpdateInfo(user)
        setIsCloseForm(false)
    }

    return (
        <article>
            <h2>{`${user.first_name}`} {`${user.last_name}`}</h2>
            <ul>
                <li>
                    <span>Email</span>
                    <span>{user.email}</span>
                </li>
                <li>
                    <span>Birthday</span>
                    <span>{user.birthday}</span>
                </li>
            </ul>
            <button onClick={handleDelete}><i className='bx bxs-trash'></i></button>
            <button onClick={handleEdit}><i className='bx bx-edit-alt'></i></button>
        </article>
    )
}

export default UserCard
