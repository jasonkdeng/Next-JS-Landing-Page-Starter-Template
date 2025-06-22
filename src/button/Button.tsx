import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-xl text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-gradient-to-r from-blue-600 to-purple-600;
          }

          .btn-primary:hover {
            @apply bg-gradient-to-r from-blue-700 to-purple-700;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
