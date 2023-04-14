const Inputcomponent = ({
    block,
    flex,
    afterChecked,
    beforeChecked,
    view,
    title,
    checked,
    onChange,
    value,
    name,
    ...props
}) => {
    // const defaultChecked = checked ? false : checked;
    // const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
        <div>
            <label className={`${flex} ${block}`}>
                <input
                    type='checkbox'
                    checked={checked}
                    // onChange={() => setIsChecked((prev) => !prev)}
                    value={value}
                    onChange={onChange}
                    className={checked ? `checked ${view}` : `${view}`}
                    name={name}
                    {...props}
                />
                <span
                    className={checked ? `${afterChecked}` : `${beforeChecked}`}
                >
                    {title}
                </span>
            </label>
        </div>
    );
};

export default Inputcomponent;
