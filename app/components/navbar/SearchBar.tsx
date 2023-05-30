import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '@/app/components/Input';
import { useCallback } from 'react';
import { CgPill } from 'react-icons/cg';
import { MdOutlineLocalHospital } from 'react-icons/md';

const filters = [
  {
    icon: <CgPill size={20} className="mt-[3px] text-amber-500" />,
    buttonText: '동물약국',
    backgroundColor: '#fff',
    value: 'animal123123',
  },
  {
    icon: <MdOutlineLocalHospital size={20} className="mt-[3px] text-amber-500" />,
    buttonText: '동물병원',
    backgroundColor: '#fff',
    value: 'animalHospital',
  },
];

type SearchFormData = {
  searchTerm: string;
};

function SearchBar() {
  const {
    register,
    formState: { errors, isValid },
    getValues,
    reset: resetForm,
    setFocus,
    watch,
    handleSubmit,
  } = useForm<SearchFormData>({
    defaultValues: {
      searchTerm: '',
    },
  });

  const searchingAnimalHospitals: SubmitHandler<SearchFormData> = useCallback(({ searchTerm }) => {
    console.log('searchTerm', searchTerm);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(searchingAnimalHospitals)}
      className="absolute z-50 top-[20px] left-0 w-full flex flex-col items-center justify-center max-w-[500px]"
    >
      <div className="flex flex-col w-[90%]">
        <Input label="searchTerm" register={register} type="search" />
        <section className="flex justify-start items-center w-full pl-0.5 mt-2.5 gap-x-5">
          {
            filters.map((btn) => (
              <button
                key={btn.buttonText}
                type="button"
                value={btn.value}
                onClick={(e) => console.log(e.currentTarget.value)}
                className="bg-white shadow-md py-2 px-3 rounded-full hover:scale-110 transition"
              >
                <p className="flex items-center">
                  {btn.icon}
                  <span className="ml-1">{btn.buttonText}</span>
                </p>
              </button>
            ))
          }

        </section>
      </div>

    </form>
  );
}

export default SearchBar;
