import { FieldValue, UseFormRegister } from 'react-hook-form';

interface TermsOfUseProps {
  id:string
  label : string
  labelDetail : string
  register : UseFormRegister<FieldValue<any>>,
}

function TermsOfUse({
  id,
  label,
  labelDetail,
  register,
} : TermsOfUseProps) {
  return (
    <>
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          {...register(id, { required: true })}
        />
        <label htmlFor={id} className="ml-1.5 font-light cursor-pointer">
          {label}
          <small className="text-indigo-500 font-semibold"> (필수)</small>
        </label>
      </div>
      <div className="h-[88px] border-black rounded-md border-[1px] overflow-auto p-3 text-xs">
        {labelDetail}
      </div>
    </>
  );
}
export default TermsOfUse;
