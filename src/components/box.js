const Box = ({num,text}) => {
    return (
        <div className="box">
            <div className="number">
                {num}
            </div>
            <div className="text">
                {text + (num > 1 ? 's':'')}
            </div>
        </div>
    )
}
export default Box