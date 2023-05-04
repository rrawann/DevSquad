import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";
function Footer() {
    const { t } = useTranslation("common");
    return (
        <div className='mx-auto flex w-full flex-col justify-center bg-primary-orange p-6'>
            <div className='flex flex-col items-center space-y-6  p-6 md:flex-row md:items-center md:justify-evenly md:p-6 md:px-4'>
                <div className='basis-1/4'>
                    <svg
                        width='216'
                        height='70'
                        viewBox='0 0 216 70'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M68.7378 50.743C69.7934 50.8069 70.1428 50.0067 70.2405 49.1126L70.3043 41.8508C70.3043 40.7952 70.5936 40.2505 71.8709 40.1528C76.5743 39.8335 80.9584 38.203 85.181 36.2533C95.1927 31.7077 79.9328 23.6495 68.8317 26.6548C67.0397 27.1357 66.8181 27.5489 67.1036 29.4048C67.5544 32.1885 67.7761 34.9384 67.6821 37.756L67.4267 49.1765C67.4905 50.0067 67.8399 50.6792 68.7378 50.743ZM70.6237 36.7943C70.4321 34.4275 70.2705 32.2223 70.1127 30.0134C70.0489 29.3409 70.3983 29.0855 71.0707 28.9577C76.1273 27.9998 82.2357 28.8638 84.317 30.622C88.1225 33.7889 82.4912 35.4531 77.8554 36.1256C75.4849 36.4449 73.0881 36.5726 70.6237 36.7943Z'
                            fill='white'
                        />
                        <path
                            d='M94.5253 50.5826C96.5389 50.8719 106.776 50.808 108.729 50.361C109.815 50.1356 111.224 50.0417 111.288 48.6667C111.318 47.2241 109.943 47.0964 108.823 46.9048C107.448 46.6831 98.9094 46.8409 97.4029 46.8747C95.2616 46.9048 95.2616 46.9048 95.3254 44.8912V41.5327C95.3555 39.3575 95.3555 39.3237 97.6584 39.2598C100.825 39.1321 103.992 38.8766 107.095 38.238C107.929 38.0765 109.304 38.2681 109.304 37.0509C109.27 35.7097 107.929 36.1267 107.095 36.0628C103.673 35.7398 100.22 35.5482 96.7981 36.0628C95.5471 36.2544 95.1 35.8036 95.07 34.6203C95.0061 33.2152 94.9423 31.8403 94.7169 30.4315C94.5553 29.312 94.9723 28.9589 96.0618 28.9589C99.0371 28.9589 102.042 28.9927 104.984 29.342C107.031 29.5975 109.079 29.5336 111.126 29.5036C111.96 29.4698 112.633 29.0866 112.663 28.1925C112.663 27.4562 112.088 27.0392 111.416 26.8814C110.713 26.6898 101.979 26.239 97.2113 26.0474C95.7424 25.9835 94.2059 26.0173 92.7972 26.5283C92.0608 26.7837 91.3884 27.073 91.6138 28.0948C92.2862 31.2317 91.5499 34.3986 91.5199 37.5317C91.4523 40.6987 91.1968 43.8656 91.2306 47.0025C91.2607 49.6247 91.8693 50.1694 94.5253 50.5826Z'
                            fill='white'
                        />
                        <path
                            d='M120.991 52.1505C121.532 51.5419 122.013 51.4142 122.685 51.5419C125.116 51.9589 127.516 51.5081 129.913 51.2865C133.272 50.9672 136.472 49.9754 139.414 48.2773C144.501 44.0548 138.358 40.4408 132.539 38.2656C138.648 36.2821 139.414 32.0595 133.272 29.5312C128.857 27.7092 124.286 27.3899 119.612 28.3178C118.463 28.6033 117.279 28.8926 117.407 29.982C118.207 36.346 118.335 42.7437 118.365 49.1414C118.365 50.9334 119.454 53.9425 120.991 52.1505ZM124.954 37.8825C120.476 38.1379 121.246 36.8907 121.246 33.3068C121.085 30.6507 121.085 30.6507 123.613 30.6507C127.355 30.6846 135.898 31.7402 135.481 34.3323C135.319 35.5796 128.091 38.0102 124.954 37.8825ZM129.755 48.0858C127.197 48.0858 126.972 48.0858 124.443 47.928C121.63 47.7364 121.63 47.7026 121.63 44.761C121.63 41.4025 121.596 41.3387 125.018 40.9855C128.253 40.6662 131.513 40.6023 134.65 41.7519C141.27 43.5777 138.839 47.9918 129.755 48.0858Z'
                            fill='white'
                        />
                        <path
                            d='M148.186 52.1505C148.727 51.5419 149.208 51.4142 149.88 51.5419C152.311 51.9589 154.712 51.5081 157.108 51.2865C160.467 50.9672 163.668 49.9754 166.609 48.2773C171.696 44.0548 165.554 40.4408 159.734 38.2656C165.843 36.2821 166.609 32.0595 160.467 29.5312C156.053 27.7092 151.481 27.3899 146.807 28.3178C145.658 28.6033 144.475 28.8926 144.602 29.982C145.402 36.346 145.53 42.7437 145.56 49.1414C145.56 50.9334 146.65 53.9425 148.186 52.1505ZM152.15 37.8825C147.672 38.1379 148.442 36.8907 148.442 33.3068C148.28 30.6507 148.28 30.6507 150.808 30.6507C154.55 30.6846 163.093 31.7402 162.676 34.3323C162.514 35.5796 155.286 38.0102 152.15 37.8825ZM156.951 48.0858C154.392 48.0858 154.167 48.0858 151.639 47.928C148.825 47.7364 148.825 47.7026 148.825 44.761C148.825 41.4025 148.791 41.3387 152.213 40.9855C155.448 40.6662 158.709 40.6023 161.846 41.7519C168.465 43.5777 166.034 47.9918 156.951 48.0858Z'
                            fill='white'
                        />
                        <path
                            d='M176.773 51.7994C180.004 51.544 183.268 51.2885 186.499 50.8715C187.457 50.7438 189.219 50.9692 189.091 49.4965C188.993 48.3432 187.393 48.794 186.435 48.7302C182.915 48.5348 179.399 48.6663 175.653 49.1434C175.623 45.3679 175.496 41.7539 175.751 38.1399C175.976 35.0707 176.198 31.9977 175.976 28.9284C175.909 28.1282 175.781 27.328 174.853 27.2304C173.797 27.0726 173.414 27.9028 173.193 28.7368C172.839 30.0479 171.945 40.8899 173.065 48.8241C173.414 51.4162 174.087 51.991 176.773 51.7994Z'
                            fill='white'
                        />
                        <path
                            d='M197.128 50.5826C199.141 50.8719 209.379 50.808 211.332 50.361C212.418 50.1356 213.826 50.0417 213.89 48.6667C213.92 47.2241 212.545 47.0964 211.426 46.9048C210.051 46.6831 201.512 46.8409 200.005 46.8747C197.864 46.9048 197.864 46.9048 197.928 44.8912V41.5327C197.958 39.3575 197.958 39.3237 200.261 39.2598C203.428 39.1321 206.595 38.8766 209.698 38.238C210.532 38.0765 211.907 38.2681 211.907 37.0509C211.873 35.7097 210.532 36.1267 209.698 36.0628C206.275 35.7398 202.823 35.5482 199.401 36.0628C198.15 36.2544 197.703 35.8036 197.673 34.6203C197.609 33.2152 197.545 31.8403 197.319 30.4315C197.158 29.312 197.575 28.9589 198.664 28.9589C201.64 28.9589 204.645 28.9927 207.587 29.342C209.634 29.5975 211.681 29.5336 213.729 29.5036C214.563 29.4698 215.235 29.0866 215.265 28.1925C215.265 27.4562 214.691 27.0392 214.018 26.8814C213.316 26.6898 204.581 26.239 199.814 26.0474C198.345 25.9835 196.808 26.0173 195.4 26.5283C194.663 26.7837 193.991 27.073 194.216 28.0948C194.889 31.2317 194.152 34.3986 194.122 37.5317C194.055 40.6987 193.799 43.8656 193.833 47.0025C193.863 49.6247 194.472 50.1694 197.128 50.5826Z'
                            fill='white'
                        />
                        <path
                            d='M59.5743 65.4118C59.1926 65.6674 58.7445 65.6044 55.5723 64.9356L52.0815 64.1374C48.4402 63.2935 44.7569 62.6773 41.035 62.2887C37.1801 61.921 33.3392 62.0296 29.5088 62.6073C26.7183 62.9574 23.9558 63.4441 21.2143 64.0743C19.6457 64.3929 18.1402 64.7746 17.4049 64.9672C14.2362 65.7304 12.6642 66.1156 11.6418 66.4657C8.15102 67.6456 7.06212 68.696 3.95649 69.0496C2.32139 69.2387 1.71567 69.0496 1.29902 68.7625C-0.336081 67.6456 -0.0139632 64.617 0.112083 63.3706C0.787829 56.8337 5.58808 52.0509 6.00473 51.6378C11.8659 45.9587 19.2606 45.1289 24.1624 44.5897C35.4645 43.3783 43.8535 47.1386 47.4389 48.7983C56.5002 53.0383 58.6464 57.695 59.0946 58.7804C60.089 61.1087 60.8242 64.5505 59.5743 65.4118Z'
                            fill='#2E7EAA'
                        />
                        <path
                            d='M56.6615 51.8881C55.8947 51.9546 55.5726 51.0933 53.5558 49.4022C51.9522 48.1102 50.2331 46.9968 48.402 46.055C43.9168 43.6286 39.2741 43.0229 36.3295 42.6412C32.4886 42.2176 28.6477 42.1966 24.8033 42.5782C17.2441 43.1524 15.0663 44.5564 14.0124 43.2785C12.2513 41.2372 15.4199 34.2207 20.6053 30.1732C29.411 23.3142 41.5149 26.8225 43.7593 27.4632C46.8334 28.356 57.4948 31.4476 59.7356 39.6756C61.2411 45.1271 58.6782 51.699 56.6615 51.8881Z'
                            fill='#53C1E4'
                        />
                        <path
                            d='M16.6348 28.2273C18.557 29.3757 21.1829 26.3786 25.8571 24.6875C29.635 23.315 32.9017 23.4131 35.8813 23.5706C43.9832 23.9873 47.9537 27.7161 49.2001 26.3156C50.4501 24.9116 47.4705 19.9048 44.3964 16.7466C42.7963 15.0905 37.8665 10.0487 30.2127 10.1782C29.4109 10.1782 20.8328 10.4653 16.8939 16.8097C15.2272 19.4881 14.2014 23.5391 15.5494 26.7288C16.029 27.8457 16.5087 28.1328 16.6348 28.2273Z'
                            fill='#C0D6D1'
                        />
                        <path
                            d='M33.0313 8.45606C35.3946 8.66964 37.6354 9.30687 39.7537 10.3713C44.0463 12.6331 44.6555 15.5987 46.3816 15.2801C48.1113 14.9614 49.8724 10.977 49.2002 7.68928C48.3038 3.22515 43.4056 0.546678 39.4666 0.0705038C35.5277 -0.409171 31.8128 1.6951 30.983 2.26931C28.4201 4.08647 26.0497 7.21311 26.7535 8.33002C27.4607 9.44342 29.1869 8.10594 33.0313 8.45606Z'
                            fill='#F5C798'
                        />
                    </svg>
                </div>
                <div className='flex basis-1/2 flex-col justify-center space-y-6 font-Rubik'>
                    <ul className='flex justify-center space-x-4 mx-2'>
                        <li className='cursor-pointer p-2 '>
                            <Link href='/events'>
                                <b>{t("Navbar.Events")}</b>
                            </Link>
                        </li>
                        <li className='cursor-pointer p-2 '>
                            <Link href='/aboutpage'>
                                <b>{t("Navbar.About")}</b>
                            </Link>
                        </li>
                        <li className='cursor-pointer p-2 '>
                            <Link href='/how to work'>
                                <b>{t("home.Howitwork")}</b>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex basis-1/4 justify-center gap-8'>
                    <Link href='#'>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M20.0629 3.17268C21.2128 2.93651 22.3467 2.32782 22.3467 2.32782C22.8522 2.09044 23.0413 2.27593 22.7687 2.75418C22.7687 2.75418 22.0881 4.16512 21.0483 4.82046C22.0665 4.69262 22.9856 4.31948 22.9856 4.31948C23.5153 4.13931 23.6581 4.56723 23.3114 5C23.3114 5 22.4125 6.25248 21.429 7C21.4375 7.22607 21.4414 7.18617 21.4414 7.41695C21.4414 15.4232 17.4012 22.5 7.11737 22.5C3.25262 22.5 1.18358 20.9666 1.18358 20.9666C0.185408 20.4585 0.29872 19.8655 1.4077 19.6996C1.4077 19.6996 5.13079 19.3451 6.85332 17.9227C-2.9996 13 1.01913 3.46925 1.01913 3.46925C1.05776 2.91996 1.43762 2.78005 1.84442 3.16555C1.84442 3.16555 6.279 7.78701 11.4856 8.00838C11.3991 7.62015 11.3559 7.21712 11.3559 6.8013C11.3559 3.87378 13.6104 1.5 16.3885 1.5C17.8378 1.5 19.1469 2.14323 20.0629 3.17268Z'
                                fill='#1A1A1A'
                            />
                        </svg>
                    </Link>
                    <Link href='#'>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M1 12.0267C1 5.93684 5.92487 1 12 1C18.0751 1 23 5.93684 23 12.0267C23 17.7478 18.6536 22.4512 13.0904 23C13.1201 22.9948 13.1499 22.9892 13.1796 22.9832V15.1921H16.0394L16.4673 11.8638H13.1796V9.73875C13.1796 8.77507 13.4464 8.11854 14.825 8.11854L16.5831 8.11767V5.1409C16.279 5.10021 15.2355 5.00973 14.0212 5.00973C11.4864 5.00973 9.7508 6.56067 9.7508 9.4093V11.8638H6.88369V15.1921H9.7508V22.8228C4.75441 21.7821 1 17.344 1 12.0267Z'
                                fill='#1A1A1A'
                            />
                        </svg>
                    </Link>
                    <Link href='#'>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M12.1549 9.82176V13.1768C12.1549 13.7297 12.6022 14.1776 13.155 14.1769C14.5301 14.1751 16.9719 14.1722 18.1853 14.1722C17.2401 16.9969 15.771 18.5347 12.1549 18.5347C8.49517 18.5347 5.63879 15.609 5.63879 11.9996C5.63879 8.39102 8.49517 5.46528 12.1549 5.46528C14.0896 5.46528 15.3393 6.1361 16.4855 7.0708C17.4029 6.16609 17.3263 6.03672 19.6605 3.86234C17.6788 2.08376 15.0452 1 12.1549 1C5.99475 1 1 5.92449 1 11.9996C1 18.0747 5.99475 23 12.1549 23C21.3628 23 23.6134 15.0932 22.8676 9.82176H12.1549Z'
                                fill='#1A1A1A'
                            />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center'>&copy; Pebble Work, 2023</div>
        </div>
    );
}

export default Footer;
