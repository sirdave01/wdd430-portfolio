'use client';

import { useActionState } from 'react';

import type { State } from '@/app/projects/lib/actions';

type ProjectFormAction = (
  previousState: State,
  formData: FormData,
) => Promise<State>;

type ProjectFormProps = {
  action: ProjectFormAction;
  initialValues?: {
    title?: string;
    description?: string;
    technologies?: string;
    yearCompleted?: number;
  };
  submitLabel: string;
};

const initialState: State = { message: null, errors: {} };

export default function ProjectForm({
  action,
  initialValues = {},
  submitLabel,
}: ProjectFormProps) {
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form
      action={formAction}
      className="flex max-w-xl flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium text-slate-700">
          Project Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={initialValues.title}
          aria-describedby="title-error"
          aria-invalid={state.errors?.title ? true : undefined}
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-slate-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={initialValues.description}
          aria-describedby="description-error"
          aria-invalid={state.errors?.description ? true : undefined}
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="technologies" className="mb-2 block text-sm font-medium text-slate-700">
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          defaultValue={initialValues.technologies}
          aria-describedby="technologies-error"
          aria-invalid={state.errors?.technologies ? true : undefined}
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
        <div id="technologies-error" aria-live="polite" aria-atomic="true">
          {state.errors?.technologies?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="yearCompleted" className="mb-2 block text-sm font-medium text-slate-700">
          Year Completed
        </label>
        <input
          id="yearCompleted"
          name="yearCompleted"
          type="number"
          min="2000"
          max={new Date().getFullYear()}
          defaultValue={initialValues.yearCompleted}
          aria-describedby="yearCompleted-error"
          aria-invalid={state.errors?.yearCompleted ? true : undefined}
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          required
        />
        <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
          {state.errors?.yearCompleted?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {state.message ? (
        <p aria-live="polite" className="text-sm text-red-600">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Saving...' : submitLabel}
      </button>
    </form>
  );
}
