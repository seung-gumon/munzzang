import Link from 'next/link';

function PlaceHeader() {
  return (
    <div className="grid grid-cols-8 bg-primary-clear p-4 m-3 rounded-lg text-primary-visible">
      <div className="col-span-2">
        <h3 className="text-xxs font-light">영수증 등록수</h3>
        <span className="text-lg font-semibold">5,398</span>
      </div>
      <div className="divider divider-horizontal before:bg-primary-dull after:bg-primary-dull" />
      <div className="col-span-2">
        <h3 className="text-xxs font-light" />
        <span className="text-lg">182</span>
      </div>
      <div className="divider divider-horizontal before:bg-primary-dull after:bg-primary-dull" />
      <div className="col-span-2">
        <h3 className="text-xxs font-light">Friends</h3>
        <span className="text-lg">7</span>
      </div>
    </div>

  );
}
export default PlaceHeader;
