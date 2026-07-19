interface DashboardCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

export default function DashboardCard({
  title,
  value,
  icon,
  color,
}: DashboardCardProps) {
  return (
    <div className={`rounded-xl shadow-md p-6 text-white ${color}`}>

      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm opacity-90">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className="text-5xl">
          {icon}
        </div>

      </div>

    </div>
  );
}