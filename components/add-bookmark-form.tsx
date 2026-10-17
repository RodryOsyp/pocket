"use client";

import { useActionState, type ComponentProps } from "react";
import { createBookmarkAction } from "@/lib/actions/bookmarks";
import type { FieldErrors, FormState } from "@/lib/validation";

const initialState: FormState = { status: "idle" };

const AddBookmarkForm = () => {
  const [state, formAction, isPending] = useActionState(
    createBookmarkAction,
    initialState,
    
  );

  const errors: FieldErrors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : undefined;

  return (
    <form action={formAction} className="mb-6 space-y-3 rounded-lg border p-4">
      <Field
        label="Название"
        name="title"
        required
        placeholder="MongoDB Dashboard"
        defaultValue={values?.title}
        errors={errors.title}
      />
      <Field
        label="URL"
        name="url"
        type="url"
        required
        placeholder="https://..."
        defaultValue={values?.url}
        errors={errors.url}
      />
      <Field
        label="Теги через запятую"
        name="tags"
        placeholder="next, typescript"
        defaultValue={values?.tags}
        errors={errors.tags}
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded border px-4 py-2 font-medium disabled:opacity-50"
      >
        {isPending ? "Сохраняю..." : "Добавить"}
      </button>
    </form>
  );
};

function Field({
  label,
  name,
  errors,
  ...inputProps
}: {
  label: string;
  name: string;
  errors?: string[];
} & ComponentProps<"input">) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="mt-1 w-full rounded border px-3 py-2"
        {...inputProps}
      />
      {errors && (
        <p id={errorId} className="mt-1 text-sm text-red-600">
          {errors.join(", ")}
        </p>
      )}
    </div>
  );
}

export default AddBookmarkForm;
