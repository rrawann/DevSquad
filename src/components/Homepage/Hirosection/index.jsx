import Image from "next/image";
import Link from "next/link";

const Hirosection = () => {
    return (
        <div className='container mx-auto md:px-32 px-10 pt-12	pb-4 grid md:grid-cols-2 gap-10  grid-cols-1 font-Rubik'>
            <div className='flex flex-col align-content-center justify-center align-items-start text-center md:text-left'>
                <div className='flex flex-col '>
                    <p className='text-5xl font-medium'>title</p>
                    <p className='text-2xl text-primary-gray px-2 font-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur at, illum itaque facilis minima iusto
                        reiciendis ipsum veniam optio perspiciatis.
                    </p>
                </div>
                <div className='pt-10	'>
                    <Link
                        href='/blogs'
                        className='w-20 h-7 py-2.5 px-4 rounded-lg bg-primary-blue text-white text-2xl'
                    >
                        Get Started
                    </Link>
                </div>
            </div>
            <div className='relative h-96 overflow-hidden'>
                <Image
                    src='/images/Image.png'
                    alt='profile'
                    fill
                    className='object-cover rounded-xl'
                />
            </div>
        </div>
    );
};

export default Hirosection;
