export default function WeddingCalendar() {
  return (
    <section className="relative bg-amber-50 px-4 flex flex-col items-center justify-center font-wedding overflow-hidden min-h-[400px]">

      {/* Ornamento superior */}
      <div className="absolute top-6 w-full flex justify-center pointer-events-none">
        <img
          src="./assets/images/ornamentos/ornamento-4.png"
          alt="Decoración superior"
          className="w-full max-w-md opacity-40 object-contain"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center mt-6">
        <h3 className="text-4xl md:text-5xl text-slate-800 mb-4 font-bold">
          Abril 2026
        </h3>

        <table className="border-separate border-spacing-x-3 border-spacing-y-2 text-center">
          <thead>
            <tr className="text-2xl md:text-3xl font-bold text-slate-900">
              <th>L</th>
              <th>M</th>
              <th>M</th>
              <th>J</th>
              <th>V</th>
              <th>S</th>
              <th>D</th>
            </tr>
          </thead>

          <tbody className="text-2xl md:text-3xl text-slate-700">
            <tr>
              <td>30</td>
              <td>31</td>
              <td className="relative">
                1
              </td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td className="relative">
                5
                <img
                  src="./assets/images/corazon.png"
                  alt="Corazón"
                  className="absolute inset-0 m-auto w-[50px] h-[30px] pointer-events-none"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Ornamento inferior */}
      <div className="absolute bottom-2 w-full flex justify-center pointer-events-none">
        <img
          src="./assets/images/ornamentos/ornamento-5.png"
          alt="Decoración inferior"
          className="w-full max-w-md opacity-40 object-contain"
        />
      </div>
    </section>
  );
}
