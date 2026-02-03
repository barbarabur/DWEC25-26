export function Gradient({ hue, saturation, number }) {
    const divs = [];
    for (let i = 0; i < number; i++) {
        const lightness = i * (100 / number);
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        divs.push(
            <div
            key={i}
            className="square"
            style={{ background:color }}
        ></div>
        );
    }
    return (
        <div className="squares">
            {divs}
        </div>
    );
}