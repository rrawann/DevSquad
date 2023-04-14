import { useState } from "react";
const Inputcomponent = ({
    afterChecked,
    beforeChecked,
    view,
    title,
    checked,
    onChange,
    ...props
}) => {
    // const defaultChecked = checked ? false : checked;
    // const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
        <div>
            <label className='flex sm:block'>
                <input
                    type='checkbox'
                    checked={checked}
                    // onChange={() => setIsChecked((prev) => !prev)}
                    onChange={onChange}
                    className={checked ? `checked ${view}` : `${view}`}
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
