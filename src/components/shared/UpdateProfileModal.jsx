'use client'

import { handleUpdateProfile } from '@/lib/formFunctions';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { Pencil, User, Image } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const UpdateProfileModal = ({ user }) => {
  const router = useRouter();

  return (
    <Modal>

      <Button
        className="self-start inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-medium transition-colors cursor-pointer shrink-0"
        style={{
          background: "rgba(36,59,66,0.07)",
          color: "#243B42",
          border: "1px solid rgba(36,59,66,0.12)",
        }}
      >
        <Pencil size={13} /> Update
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md overflow-hidden rounded-[20px]" style={{ background: '#fff' }}>
            <Modal.CloseTrigger />

            <Modal.Header className="p-6 pb-2">
              <Modal.Heading className="text-[18px] font-bold" style={{ color: '#243B42' }}>
                Update Profile
              </Modal.Heading>
              <p className="mt-1 text-[13px]" style={{ color: "rgba(36,59,66,0.6)" }}>
                Modify your personal details below.
              </p>
            </Modal.Header>

            <Modal.Body className="px-6 py-4">
              <Surface variant="default" className="border-0 p-0">

                <form
                  id="update-profile-form"
                  onSubmit={(e) => handleUpdateProfile(e, router)}
                  className="flex flex-col gap-5 bg-white"
                >
                  {/* Name Field */}
                  <TextField defaultValue={user?.name} className="w-full flex flex-col gap-1.5" name="name" type="text" variant="secondary">
                    <Label className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "rgba(36,59,66,0.6)" }}>
                      Full Name
                    </Label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3" style={{ color: '#243B42' }}>
                        <User size={14} />
                      </span>
                      <Input
                        placeholder="Enter your name"
                        className="w-full text-[13px] pl-9 pr-4 py-2 rounded-lg outline-none transition-all"
                        style={{
                          background: "rgba(197,222,230,0.15)",
                          border: "1px solid rgba(36,59,66,0.12)",
                          color: "#243B42"
                        }}
                      />
                    </div>
                  </TextField>

                  {/* Photo URL Field */}
                  <TextField defaultValue={user?.image} className="w-full flex flex-col gap-1.5" name="image" type="url" variant="secondary">
                    <Label className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "rgba(36,59,66,0.6)" }}>
                      Profile Image URL
                    </Label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3" style={{ color: '#243B42' }}>
                        <Image size={14} alt={'img'} />
                      </span>
                      <Input
                        placeholder="https://example.com/avatar.jpg"
                        className="w-full text-[13px] pl-9 pr-4 py-2 rounded-lg outline-none transition-all"
                        style={{
                          background: "rgba(197,222,230,0.15)",
                          border: "1px solid rgba(36,59,66,0.12)",
                          color: "#243B42"
                        }}
                      />
                    </div>
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>

            {/* Modal Actions Footer */}
            <Modal.Footer className="p-6 pt-2 flex items-center justify-end gap-3">
              {/* Cancel Button */}
              <Button
                slot="close"
                className="px-4 py-2 rounded-lg text-[12px] font-medium transition-colors cursor-pointer shrink-0"
                style={{
                  background: "rgba(36,59,66,0.07)",
                  color: "#243B42",
                  border: "1px solid rgba(36,59,66,0.12)",
                }}
              >
                Cancel
              </Button>

              {/* Save Changes Button */}
              <Button
                type="submit"
                form="update-profile-form"
                slot="close"
                className="px-4 py-2 rounded-lg text-[13px] font-medium transition-colors cursor-pointer text-white"
                style={{
                  background: "#243B42",
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfileModal;