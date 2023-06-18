import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
  const [categories] = useState({
    '후기 보기': [
      {
        id: 1,
        title: '강혁욱이 여기 있어요 🐶',
      },
      {
        id: 2,
        title: '선생님이 친절해요 👨🏻‍⚕️',
      },
      {
        id: 3,
        title: '과잉진료 없어요 🙅🏻',
      },
      {
        id: 4,
        title: '매장이 청결해요 🧹',
      },
    ],
    '진료비 정보 보기': [
      {
        id: 1,
        title: '강혁욱이 여기 있어요 🐶',
      },
      {
        id: 2,
        title: '강혁욱이 여기 있어요 🐶',
      },
    ],
  });

  return (
    <div className="w-full px-2 py-8 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) => classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-colors duration-150',
                'focus:outline-none ',
                selected ? 'bg-white shadow' : 'hover:bg-white/[0.6] hover:text-black/[0.8]',
              )}
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl',
                'focus:outline-none',
              )}
            >
              <ul className="flex flex-col gap-y-1.5 mt-2 max-h-[165px] overflow-auto">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="cursor-pointer relative rounded-md p-3 bg-primary-clear/[0.37] hover:bg-primary-clear/[0.8]"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
