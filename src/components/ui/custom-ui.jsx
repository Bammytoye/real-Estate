export const Button = ({ children, className = "", ...props }) => (
    <button
        className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
    >
        {children}
    </button>
);

export const Input = ({ className = "", ...props }) => (
    <input
        className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
    />
);

export const Label = ({ children, htmlFor, className = "" }) => (
    <label
        htmlFor={htmlFor}
        className={`block text-sm font-medium text-gray-700 ${className}`}
    >
        {children}
    </label>
);

export const Card = ({ children, className = "" }) => (
    <div className={`bg-white border rounded-2xl shadow p-6 ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className = "" }) => (
    <div className={`mb-4 text-center ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
    <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
);

export const CardDescription = ({ children, className = "" }) => (
    <p className={`text-gray-500 text-sm ${className}`}>{children}</p>
);

export const CardContent = ({ children, className = "" }) => (
    <div className={`space-y-4 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = "" }) => (
    <div className={`mt-4 ${className}`}>{children}</div>
);

export const Checkbox = ({ id, checked, onChange, className = "", ...props }) => (
    <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`w-4 h-4 accent-blue-600 ${className}`}
        {...props}
    />
);
