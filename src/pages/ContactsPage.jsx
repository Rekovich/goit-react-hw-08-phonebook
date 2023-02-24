import css from '../components/app.module.css'
const { default: ContactForm } = require("components/ContactForm/ContactForm")
const { default: ContactList } = require("components/ContactList/ContactList")
const { default: Filter } = require("components/Filter/Filter")
const { useEffect } = require("react")
const { useDispatch } = require("react-redux")
const { getContactsThunk } = require("redux/contacts/contacts-thunk")


const Contacts = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getContactsThunk())
    }, [dispatch])

    return (
        <div className={css.container}>
        <h1 className={css.title}>
        <img
              className="mx-auto h-12 w-auto"
              src="https://play-lh.googleusercontent.com/h6z0ro9wtsxb20fgLaIDXJrXtWqDyvm_Bnfk-q3JFbg08R2PgNq8ZSAoUX1DYDXLofPD=w240-h480-rw"
              alt="Phonebook"
            />
            Phonebook</h1>
        <ContactForm />
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
}

export default Contacts;