export const Paragraph = props => {
    const {paragraph , className} = props;
    return (
        <p className={className}>{paragraph}</p>
    )
}