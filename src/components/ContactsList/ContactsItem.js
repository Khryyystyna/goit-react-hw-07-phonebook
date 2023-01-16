import css from './Contacts.module.css'
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsItem = ({id}) => {
    const dispatch = useDispatch();
    const handleDelete = id => dispatch(deleteContacts(id));


    const contactsView = useSelector(selectVisibleContacts)
  
    return (
        <>
            {contactsView.map(({ id, name, number }) => (
                <li key={id} className={css.item}>
                    {name}:{number}
                    <button className={css.btn} type='submit'
                onClick={()=>handleDelete(id)}>Delete</button>
                </li>
            ))}
            </>
        )}