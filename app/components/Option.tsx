import Tag from "./Option/Tag";

export default function Option(props: any) {
    return (
        <button onClick={() => props.onClick(props.optionId)} className="w-full h-[20vh] p-4 focus:outline-dotted flex items-start flex-col border-b-2">
            <h3 className="text-xl font-bold">{props.title}</h3>
            <div className="flex gap-2">
                {props.tags.map((tag: any, index: any) => {
                    return (
                        <Tag key={index} title={tag} />
                    )
                })}
            </div>
        </button>
    )
}