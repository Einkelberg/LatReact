export default function Label({type}){
    return <>
    <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor={type}>
          {type}:
        </label>
    </>
}