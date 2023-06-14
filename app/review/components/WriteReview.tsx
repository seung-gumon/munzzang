import Button from '@/app/components/Button';
import { AiOutlineBell } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';

function WriteReview() {
  return (
    <div className="mt-8 flex w-full p-4 justify-center items-center gap-x-3.5">
      <section className="flex">
        <article className="w-12 h-12 bg-bg-focus rounded-full shadow-inner">
          <div className="overflow-hidden flex items-center justify-center flex-col w-full h-full">
            <div className="rounded-full flex items-center justify-center">
              <FiUser size={24} />
            </div>
          </div>
        </article>
        <article className="flex flex-col justify-center ml-4">
          <div className="font-bold text-sm text-clear">Unknown</div>
          <h3 className="text-xxs text-dull">Software Developer</h3>
        </article>
      </section>
    </div>

  );
}
export default WriteReview;
