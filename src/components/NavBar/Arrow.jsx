export const Arrow = ({ className = '', fill = '#262626', width = '21', height = '18' }) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M-3.93403e-07 9C-4.20561e-07 8.37868 0.503679 7.875 1.125 7.875L17.0819 7.875L10.8453 1.93593C10.3974 1.50529 10.3834 0.793119 10.8141 0.345249C11.2447 -0.102618 11.9569 -0.116583 12.4047 0.31406L20.6547 8.18906C20.8753 8.40116 21 8.69398 21 9C21 9.30602 20.8753 9.59883 20.6547 9.81093L12.4047 17.6859C11.9569 18.1166 11.2447 18.1026 10.8141 17.6547C10.3834 17.2069 10.3974 16.4947 10.8453 16.0641L17.0819 10.125L1.125 10.125C0.503679 10.125 -3.66244e-07 9.62132 -3.93403e-07 9Z" fill={fill} />
        </svg>
    )
}
export const Logo = ({ className = '', fill = '#1A1A1A', width = '33.33', height = '33.33' }) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.66667 17L17 8.66667L25.3333 17L17 25.3333L8.66667 17Z" fill={fill} />
            <path d="M33.6667 7V17L17 0.333336H27L33.6667 7Z" fill={fill} />
            <path d="M33.6667 27V17L17 33.6667H27L33.6667 27Z" fill={fill} />
            <path d="M0.333336 27V17L17 33.6667H7L0.333336 27Z" fill={fill} />
            <path d="M0.333336 7V17L17 0.333336H7L0.333336 7Z" fill={fill} />
        </svg>
    )
}