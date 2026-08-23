export default function Window({
  title,
  children,
  className = '',
}) {
  return (
    <div className={`mcm-card relative overflow-hidden flex flex-col ${className}`}>
      {title && (
        <div className="px-6 pt-5 pb-2 border-b-2 border-mcm-border dark:border-mcm-border-light bg-mcm-mustard dark:bg-mcm-orange">
          <span className="font-display text-sm font-bold tracking-widest uppercase text-mcm-dark dark:text-mcm-cream">
            {title}
          </span>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        {children}
      </div>
    </div>
  );
}
