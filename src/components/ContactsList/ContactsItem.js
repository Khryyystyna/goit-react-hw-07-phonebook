import css from './Contacts.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsItem = ({ id}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    const contacts = useSelector(selectVisibleContacts);

    return (
        <>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={css.item}>
                    {name}:{number}
                    <button className={css.btn} type='submit'
                    onClick={handleDelete}>Delete</button>
                </li>
            ))}
            </>
        )}