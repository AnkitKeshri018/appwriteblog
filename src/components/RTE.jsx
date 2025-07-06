import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="c9fq4ao2tmgaoaxsn2czyf7sizpu5wix0v09v1ur2ybc99dc"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

/*
the field object is given by the react hook form of which the onChange function we are using now

field = {
  value,         // current value of editor
  onChange,      // function to update the value
  onBlur,        // optional
  name,          // "content"
  ref            // reference to the DOM
}





                      Feature	Plain Input (register)	Custom Editor (Controller)

Handles onChange automatically?	 ✅ Yes	                 ❌ No

Needs manual onChange?	         ❌ No	                 ✅ Yes

Needs Controller?	               ❌ No	                 ✅ Yes

So yes, you're exactly right:

We use Controller and onChange with custom editors like TinyMCE because React Hook Form doesn’t know how to track their value directly.







*/