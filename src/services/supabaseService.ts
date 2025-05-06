
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

// Skills service functions
export const fetchSkills = async () => {
  try {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .order("category");
      
    if (error) {
      console.error("Error fetching skills:", error);
      toast({
        title: "Error",
        description: "Failed to load skills. Please try again.",
        variant: "destructive",
      });
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error("Unexpected error fetching skills:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred while loading skills.",
      variant: "destructive",
    });
    return [];
  }
};

export const addSkill = async (name: string, category: string) => {
  try {
    const { data, error } = await supabase
      .from("skills")
      .insert([{ name, category }])
      .select();
      
    if (error) {
      console.error("Error adding skill:", error);
      toast({
        title: "Error",
        description: "Failed to add skill. Please try again.",
        variant: "destructive",
      });
      return null;
    }
    
    toast({
      title: "Success",
      description: "Skill added successfully!",
    });
    
    return data?.[0] || null;
  } catch (error) {
    console.error("Unexpected error adding skill:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred while adding the skill.",
      variant: "destructive",
    });
    return null;
  }
};

export const deleteSkill = async (id: string) => {
  try {
    const { error } = await supabase
      .from("skills")
      .delete()
      .eq("id", id);
      
    if (error) {
      console.error("Error deleting skill:", error);
      toast({
        title: "Error",
        description: "Failed to delete skill. Please try again.",
        variant: "destructive",
      });
      return false;
    }
    
    toast({
      title: "Success",
      description: "Skill deleted successfully!",
    });
    
    return true;
  } catch (error) {
    console.error("Unexpected error deleting skill:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred while deleting the skill.",
      variant: "destructive",
    });
    return false;
  }
};

// Contact messages service functions
export const fetchContactMessages = async () => {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });
      
    if (error) {
      console.error("Error fetching contact messages:", error);
      toast({
        title: "Error",
        description: "Failed to load contact messages. Please try again.",
        variant: "destructive",
      });
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error("Unexpected error fetching contact messages:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred while loading contact messages.",
      variant: "destructive",
    });
    return [];
  }
};

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const { error } = await supabase
      .from("contact_messages")
      .insert([formData]);
      
    if (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your message. Please try again.",
        variant: "destructive",
      });
      return false;
    }
    
    toast({
      title: "Success",
      description: "Your message has been sent successfully!",
    });
    
    return true;
  } catch (error) {
    console.error("Unexpected error submitting contact form:", error);
    toast({
      title: "Error",
      description: "An unexpected error occurred while sending your message.",
      variant: "destructive",
    });
    return false;
  }
};
