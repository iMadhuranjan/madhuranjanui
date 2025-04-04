export function SimpleTable() {
  return (
    <div className="overflow-x-auto shadow-sm border border-gray-200 dark:border-gray-700">
      <table className="text-sm text-left text-gray-700 dark:text-gray-100 w-[100%]">
        <thead className="bg-violet-100 dark:bg-blue-900 text-gray-900 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Role
            </th>
            <th scope="col" className="px-6 py-4">
              Email
            </th>
            <th scope="col" className="px-6 py-4">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900">
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              John Doe
            </td>
            <td className="px-6 py-4">Developer</td>
            <td className="px-6 py-4">john@example.com</td>
            <td className="px-6 py-4 text-green-600 dark:text-green-400">
              Active
            </td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Jane Smith
            </td>
            <td className="px-6 py-4">Designer</td>
            <td className="px-6 py-4">jane@example.com</td>
            <td className="px-6 py-4 text-red-600 dark:text-red-400">
              Inactive
            </td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              John Doe
            </td>
            <td className="px-6 py-4">Developer</td>
            <td className="px-6 py-4">john@example.com</td>
            <td className="px-6 py-4 text-green-600 dark:text-green-400">
              Active
            </td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Jane Smith
            </td>
            <td className="px-6 py-4">Designer</td>
            <td className="px-6 py-4">jane@example.com</td>
            <td className="px-6 py-4 text-red-600 dark:text-red-400">
              Inactive
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function StripeTable() {
  return (
    <div className="w-full overflow-x-auto shadow-sm border border-gray-200 dark:border-gray-700">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="bg-violet-100 dark:bg-blue-900 text-gray-900 dark:text-white">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Role</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900">
          <tr className="border-b border-gray-200 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              John Doe
            </td>
            <td className="px-6 py-4">Developer</td>
            <td className="px-6 py-4">john@example.com</td>
            <td className="px-6 py-4 text-green-600 dark:text-green-400">Active</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Jane Smith
            </td>
            <td className="px-6 py-4">Designer</td>
            <td className="px-6 py-4">jane@example.com</td>
            <td className="px-6 py-4 text-red-600 dark:text-red-400">Inactive</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Emily Stone
            </td>
            <td className="px-6 py-4">Product Manager</td>
            <td className="px-6 py-4">emily@example.com</td>
            <td className="px-6 py-4 text-green-600 dark:text-green-400">Active</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Michael Brown
            </td>
            <td className="px-6 py-4">QA Engineer</td>
            <td className="px-6 py-4">michael@example.com</td>
            <td className="px-6 py-4 text-green-600 dark:text-green-400">Active</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Sarah Johnson
            </td>
            <td className="px-6 py-4">Support</td>
            <td className="px-6 py-4">sarah@example.com</td>
            <td className="px-6 py-4 text-red-600 dark:text-red-400">Inactive</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Chris White
            </td>
            <td className="px-6 py-4">DevOps</td>
            <td className="px-6 py-4">chris@example.com</td>
            <td className="px-6 py-4 text-green-600 dark:text-green-400">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function StripeTableHover() {
  return (
    <div className="w-full overflow-x-auto border border-gray-200 dark:border-gray-700 shadow-sm">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="bg-violet-100 dark:bg-blue-900 text-gray-900 dark:text-white">
          <tr>
            <th className="px-6 py-5 whitespace-nowrap">Name</th>
            <th className="px-6 py-5 whitespace-nowrap">Role</th>
            <th className="px-6 py-5 whitespace-nowrap">Email</th>
            <th className="px-6 py-5 whitespace-nowrap">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="even:bg-gray-50 even:dark:bg-gray-800 hover:bg-violet-50 hover:dark:bg-blue-800 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              John Doe
            </td>
            <td className="px-6 py-4">Developer</td>
            <td className="px-6 py-4">john@example.com</td>
            <td className="px-6 py-4 text-green-600 dark:text-green-400">Active</td>
          </tr>
          <tr className="even:bg-gray-50 even:dark:bg-gray-800 hover:bg-violet-50 hover:dark:bg-blue-800 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Jane Smith
            </td>
            <td className="px-6 py-4">Designer</td>
            <td className="px-6 py-4">jane@example.com</td>
            <td className="px-6 py-4 text-red-600 dark:text-red-400">Inactive</td>
          </tr>
          <tr className="even:bg-gray-50 even:dark:bg-gray-800 hover:bg-violet-50 hover:dark:bg-blue-800 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Emily Stone
            </td>
            <td className="px-6 py-4">Product Manager</td>
            <td className="px-6 py-4">emily@example.com</td>
            <td className="px-6 py-4 text-green-600 dark:text-green-400">Active</td>
          </tr>
          <tr className="even:bg-gray-50 even:dark:bg-gray-800 hover:bg-violet-50 hover:dark:bg-blue-800 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Michael Brown
            </td>
            <td className="px-6 py-4">QA Engineer</td>
            <td className="px-6 py-4">michael@example.com</td>
            <td className="px-6 py-4 text-green-600 dark:text-green-400">Active</td>
          </tr>
          <tr className="even:bg-gray-50 even:dark:bg-gray-800 hover:bg-violet-50 hover:dark:bg-blue-800 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Sarah Johnson
            </td>
            <td className="px-6 py-4">Support</td>
            <td className="px-6 py-4">sarah@example.com</td>
            <td className="px-6 py-4 text-red-600 dark:text-red-400">Inactive</td>
          </tr>
          <tr className="even:bg-gray-50 even:dark:bg-gray-800 hover:bg-violet-50 hover:dark:bg-blue-800 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Chris White
            </td>
            <td className="px-6 py-4">DevOps</td>
            <td className="px-6 py-4">chris@example.com</td>
            <td className="px-6 py-4 text-green-600 dark:text-green-400">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function TableWithAction() {
  return (
    <div className="w-full overflow-x-auto  border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="bg-violet-100 dark:bg-blue-900 text-gray-900 dark:text-white">
          <tr>
            <th className="px-6 py-4 font-semibold whitespace-nowrap">Full Name</th>
            <th className="px-6 py-4 font-semibold whitespace-nowrap">
              Joining Date
            </th>
            <th className="px-6 py-4 font-semibold whitespace-nowrap">
              Email Address
            </th>
            <th className="px-6 py-4 font-semibold whitespace-nowrap">Status</th>
            <th className="px-6 py-4 font-semibold text-right whitespace-nowrap">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          <tr className="hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Ava Mitchell
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Jan 12, 2024</td>
            <td className="px-6 py-4 whitespace-nowrap">
              ava.mitchell@company.com
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-800 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075L3.22 11.28a.75.75 0 111.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Active
              </span>
            </td>
            <td className="px-6 py-4 text-right flex justify-end gap-3">
              <a
                href="#"
                className="text-red-500 hover:underline text-xs font-medium"
              >
                Delete
              </a>
              <a
                href="#"
                className="text-violet-600 dark:text-blue-400 hover:underline text-xs font-medium"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Liam Carter
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Feb 23, 2024</td>
            <td className="px-6 py-4 whitespace-nowrap">liam.carter@company.com</td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 dark:bg-yellow-800 px-3 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-300">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="3" />
                </svg>
                Pending
              </span>
            </td>
            <td className="px-6 py-4 text-right flex justify-end gap-3">
              <a
                href="#"
                className="text-red-500 hover:underline text-xs font-medium"
              >
                Delete
              </a>
              <a
                href="#"
                className="text-violet-600 dark:text-blue-400 hover:underline text-xs font-medium"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Sophia Nguyen
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Mar 1, 2024</td>
            <td className="px-6 py-4 whitespace-nowrap">
              sophia.nguyen@company.com
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-red-100 dark:bg-red-800 px-3 py-1 text-xs font-medium text-red-700 dark:text-red-300">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
                Inactive
              </span>
            </td>
            <td className="px-6 py-4 text-right flex justify-end gap-3">
              <a
                href="#"
                className="text-red-500 hover:underline text-xs font-medium"
              >
                Delete
              </a>
              <a
                href="#"
                className="text-violet-600 dark:text-blue-400 hover:underline text-xs font-medium"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="hover:bg-violet-50 dark:hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Noah Patel
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Mar 19, 2024</td>
            <td className="px-6 py-4 whitespace-nowrap">noah.patel@company.com</td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-800 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075L3.22 11.28a.75.75 0 111.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Active
              </span>
            </td>
            <td className="px-6 py-4 text-right flex justify-end gap-3">
              <a
                href="#"
                className="text-red-500 hover:underline text-xs font-medium"
              >
                Delete
              </a>
              <a
                href="#"
                className="text-violet-600 dark:text-blue-400 hover:underline text-xs font-medium"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function TableWithAvatar() {
  return (
    <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="bg-violet-100 dark:bg-gray-800 text-gray-900 dark:text-white">
          <tr>
            <th className="px-6 py-4 font-semibold">Name</th>
            <th className="px-6 py-4 font-semibold">State</th>
            <th className="px-6 py-4 font-semibold">Role</th>
            <th className="px-6 py-4 font-semibold">Team</th>
            <th className="px-6 py-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="/avatar/avatar2.jpg"
                  alt="Isabelle"
                />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 ring ring-white dark:ring-gray-900"></span>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Isabelle Moore
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  isabelle.moore@example.com
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-800 px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-300">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-300"></span>
                Active
              </span>
            </td>
            <td className="px-6 py-4">Frontend Engineer</td>
            <td className="px-6 py-4">
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-blue-100 dark:bg-blue-800 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                  Design
                </span>
                <span className="rounded-full bg-indigo-100 dark:bg-indigo-800 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">
                  Product
                </span>
                <span className="rounded-full bg-violet-100 dark:bg-violet-800 px-2 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                  Dev
                </span>
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex justify-end gap-3">
                <a
                  href="#"
                  className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                  title="Delete"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
                  title="Edit"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>

          <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="/avatar/avatar3.jpg"
                  alt="Jacob"
                />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 ring ring-white dark:ring-gray-900"></span>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Jacob Riley
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  jacob.riley@team.io
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 dark:bg-yellow-700 px-2 py-1 text-xs font-semibold text-yellow-700 dark:text-yellow-300">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                Pending
              </span>
            </td>
            <td className="px-6 py-4">QA Analyst</td>
            <td className="px-6 py-4">
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-blue-100 dark:bg-blue-800 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                  Test
                </span>
                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                  Support
                </span>
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex justify-end gap-3">
                <a
                  href="#"
                  className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                  title="Delete"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
                  title="Edit"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>

          <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="/avatar/girl.jpeg"
                  alt="Sophia"
                />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-red-500 ring ring-white dark:ring-gray-900"></span>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Sophia Gomez
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  sophia.gomez@company.io
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-red-100 dark:bg-red-800 px-2 py-1 text-xs font-semibold text-red-700 dark:text-red-300">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-300"></span>
                Inactive
              </span>
            </td>
            <td className="px-6 py-4">UX Strategist</td>
            <td className="px-6 py-4">
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-violet-100 dark:bg-violet-800 px-2 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                  UX
                </span>
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex justify-end gap-3">
                <a
                  href="#"
                  className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                  title="Delete"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
                  title="Edit"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>

          <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="/avatar/avatar4.jpg"
                  alt="Ethan"
                />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 ring ring-white dark:ring-gray-900"></span>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Ethan Walker
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  ethan.walker@startup.dev
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-800 px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-300">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-300"></span>
                Active
              </span>
            </td>
            <td className="px-6 py-4">Backend Engineer</td>
            <td className="px-6 py-4">
              <span className="rounded-full bg-indigo-100 dark:bg-indigo-800 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">
                API
              </span>
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex justify-end gap-3">
                <a
                  href="#"
                  className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                  title="Delete"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
                  title="Edit"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>

          <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="/avatar/avatar2.jpg"
                  alt="Nina"
                />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 ring ring-white dark:ring-gray-900"></span>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Nina Patel
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  nina.patel@dashboard.app
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-800 px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-300">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-300"></span>
                Active
              </span>
            </td>
            <td className="px-6 py-4">Project Manager</td>
            <td className="px-6 py-4">
              <span className="rounded-full bg-yellow-100 dark:bg-yellow-800 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-300">
                Ops
              </span>
            </td>
            <td className="px-6 py-4 text-right">
              <div className="flex justify-end gap-3">
                <a
                  href="#"
                  className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                  title="Delete"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
                  title="Edit"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function TableWithFooter() {
  return (
    <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow rounded">
      <table className="min-w-full">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Unit Price
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Discount
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
              Product A
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-right">
              $50.00
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-right">
              2
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-right">
              5%
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white text-right">
              $95.00
            </td>
          </tr>
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
              Product B
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-right">
              $30.00
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-right">
              3
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-right">
              0%
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white text-right">
              $90.00
            </td>
          </tr>
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
              Product C
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-right">
              $20.00
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-right">
              5
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-right">
              10%
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white text-right">
              $90.00
            </td>
          </tr>
        </tbody>
        <tfoot className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <td
              colspan="4"
              className="px-6 py-4 text-right text-sm font-medium text-gray-900 dark:text-white"
            >
              Subtotal
            </td>
            <td className="px-6 py-4 text-right text-sm font-bold text-gray-900 dark:text-white">
              $275.00
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export function TableWithSearchFilterAndPagination() {
  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="flex flex-col items-start justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div className="group relative inline-block">
          <button className="inline-flex items-center rounded border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900">
            Last 30 days
            <svg
              className="ml-2 h-4 w-4 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="absolute left-0 z-10 mt-1 hidden w-44 rounded border border-gray-200 bg-white shadow-md group-hover:block dark:border-gray-700 dark:bg-gray-800">
            <ul className="py-1 text-sm">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Last day
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Last 7 days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Last 30 days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Last month
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Last year
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative w-full max-w-sm">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
          <input
            type="search"
            placeholder="Search for items"
            className="block w-full rounded border border-gray-200 bg-white py-2 pr-3 pl-4 text-sm text-gray-700 placeholder-gray-400 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:ring-offset-gray-900"
          />
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto rounded border border-gray-200 shadow-sm dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-200"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-200"
                >
                  Color
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-200"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-200"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-200"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900">
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  MacBook Pro 17"
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  Silver
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  Laptop
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap dark:text-gray-100">
                  $2999
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap dark:text-gray-100">
                  <a
                    href="#"
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  MacBook Pro
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  White
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  Laptop PC
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap dark:text-gray-100">
                  $1999
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap dark:text-gray-100">
                  <a
                    href="#"
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  Apple Watch
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  Black
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  Accessories
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap dark:text-gray-100">
                  $99
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap dark:text-gray-100">
                  <a
                    href="#"
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  iPad
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  Gold
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  Tablet
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap dark:text-gray-100">
                  $799
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap dark:text-gray-100">
                  <a
                    href="#"
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  Apple iMac 27"
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  Black
                </td>
                <td className="px-6 py-4 whitespace-nowrap dark:text-gray-100">
                  PC Desktop
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap dark:text-gray-100">
                  $1799
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap dark:text-gray-100">
                  <a
                    href="#"
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 bg-transparent px-1 py-2 sm:flex-row">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">5</span> of{" "}
            <span className="font-medium">25</span> results
          </div>
          <div className="flex items-center space-x-1">
            <button
              className="rounded border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-500 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              disabled
            >
              Prev
            </button>
            <button className="rounded border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-500 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              1
            </button>
            <button className="rounded border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-500 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              2
            </button>
            <button className="rounded border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-500 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              3
            </button>
            <button className="rounded border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-500 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TableProduct() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-2 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-200">
                  Product
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-200">
                  Qty
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-200">
                  Price
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-200">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-gray-900 text-sm divide-y divide-gray-100 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src="/Image/Imac.jpg"
                    alt="MacBook Pro 16"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      MacBook Pro 16
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Apple laptop
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      className="p-1 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
                         transition"
                      aria-label="Decrease quantity"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <span className="w-8 text-center">1</span>
                    <button
                      className="p-1 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
                         transition"
                      aria-label="Increase quantity"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5v14m-7-7h14" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">$2499</td>
                <td className="px-6 py-4 text-right">
                  <button
                    className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline focus:outline-none"
                    aria-label="Remove product"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 6h18M9 6v12m6-12v12M10 2h4a2 2 0 012 2v2H8V4a2 2 0 012-2z" />
                    </svg>
                    Remove
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src="/Image/PlayStation.jpg"
                    alt="PlayStation 5"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      PlayStation 5
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Sony console
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      className="p-1 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
                         transition"
                      aria-label="Decrease quantity"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <span className="w-8 text-center">1</span>
                    <button
                      className="p-1 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
                         transition"
                      aria-label="Increase quantity"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5v14m-7-7h14" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">$499</td>
                <td className="px-6 py-4 text-right">
                  <button
                    className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline focus:outline-none"
                    aria-label="Remove product"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 6h18M9 6v12m6-12v12M10 2h4a2 2 0 012 2v2H8V4a2 2 0 012-2z" />
                    </svg>
                    Remove
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src="/Image/AirPodMax.png"
                    alt="AirPods Max"
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      AirPods Max
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Apple headphones
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      className="p-1 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
                         transition"
                      aria-label="Decrease quantity"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <span className="w-8 text-center">2</span>
                    <button
                      className="p-1 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
                         transition"
                      aria-label="Increase quantity"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5v14m-7-7h14" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">$1098</td>
                <td className="px-6 py-4 text-right">
                  <button
                    className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline focus:outline-none"
                    aria-label="Remove product"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 6h18M9 6v12m6-12v12M10 2h4a2 2 0 012 2v2H8V4a2 2 0 012-2z" />
                    </svg>
                    Remove
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src="/Image/NintandoSwitch.png"
                    alt="Nintendo Switch"
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Nintendo Switch
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Nintendo console
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      className="p-1 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
                         transition"
                      aria-label="Decrease quantity"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <span className="w-8 text-center">1</span>
                    <button
                      className="p-1 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
                         transition"
                      aria-label="Increase quantity"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5v14m-7-7h14" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">$299</td>
                <td className="px-6 py-4 text-right">
                  <button
                    className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline focus:outline-none"
                    aria-label="Remove product"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 6h18M9 6v12m6-12v12M10 2h4a2 2 0 012 2v2H8V4a2 2 0 012-2z" />
                    </svg>
                    Remove
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src="/Image/AppleTv.png"
                    alt="Apple TV 4K"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Apple TV 4K
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Streaming device
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      className="p-1 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
                         transition"
                      aria-label="Decrease quantity"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <span className="w-8 text-center">1</span>
                    <button
                      className="p-1 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 
                         transition"
                      aria-label="Increase quantity"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5v14m-7-7h14" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">$179</td>
                <td className="px-6 py-4 text-right">
                  <button
                    className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline focus:outline-none"
                    aria-label="Remove product"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 6h18M9 6v12m6-12v12M10 2h4a2 2 0 012 2v2H8V4a2 2 0 012-2z" />
                    </svg>
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export function ComparisonTable(){
    return (
      <div className="overflow-x-auto px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <table className="min-w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <thead className="bg-indigo-600 text-white dark:bg-indigo-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider uppercase">
                  Features
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold tracking-wider uppercase">
                  Basic
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold tracking-wider uppercase">
                  Pro
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold tracking-wider uppercase">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
              <tr>
                <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">
                  Storage
                </td>
                <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">
                  5GB
                </td>
                <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">
                  50GB
                </td>
                <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">
                  Unlimited
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">
                  Support
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">
                  Custom Domain
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">
                  Analytics
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">
                  Priority Support
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg
                    className="mx-auto h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </td>
              </tr>
            </tbody>
            <tfoot className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <td className="px-3 py-2"></td>
                <td className="px-6 py-4 text-center">
                  <button className="rounded-md bg-indigo-600 px-4 py-2 text-white shadow transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    Select
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="rounded-md bg-indigo-600 px-4 py-2 text-white shadow transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    Select
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="rounded-md bg-indigo-600 px-4 py-2 text-white shadow transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    Select
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
}