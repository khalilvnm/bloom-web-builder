
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { fetchSkills, addSkill, deleteSkill, fetchContactMessages } from '@/services/supabaseService';
import { toast } from '@/components/ui/use-toast';

interface Skill {
  id: string;
  name: string;
  category: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const Dashboard = () => {
  const queryClient = useQueryClient();
  const [newSkill, setNewSkill] = useState({ name: "", category: "" });
  
  // Query for fetching skills
  const { 
    data: skills = [],
    isLoading: skillsLoading,
    isError: skillsError 
  } = useQuery({
    queryKey: ['skills'],
    queryFn: fetchSkills
  });

  // Query for fetching contact messages
  const { 
    data: messages = [],
    isLoading: messagesLoading,
    isError: messagesError 
  } = useQuery({
    queryKey: ['contactMessages'],
    queryFn: fetchContactMessages
  });

  // Mutation for adding a skill
  const addSkillMutation = useMutation({
    mutationFn: ({ name, category }: { name: string, category: string }) => 
      addSkill(name, category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] });
      setNewSkill({ name: "", category: "" });
    }
  });

  // Mutation for deleting a skill
  const deleteSkillMutation = useMutation({
    mutationFn: (id: string) => deleteSkill(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] });
    }
  });

  // Function to handle adding a new skill
  const handleAddSkill = () => {
    if (newSkill.name && newSkill.category) {
      addSkillMutation.mutate({ name: newSkill.name, category: newSkill.category });
    } else {
      toast({
        title: "Validation Error",
        description: "Both skill name and category are required.",
        variant: "destructive",
      });
    }
  };

  // Function to handle deleting a skill
  const handleDeleteSkill = (id: string) => {
    deleteSkillMutation.mutate(id);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="skills">Manage Skills</TabsTrigger>
            <TabsTrigger value="messages">Contact Messages</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Skill</CardTitle>
                  <CardDescription>Add a new skill to your portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="skill-name" className="text-sm font-medium">Skill Name</label>
                      <Input
                        id="skill-name"
                        value={newSkill.name}
                        onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                        placeholder="e.g., React, Node.js"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="skill-category" className="text-sm font-medium">Category</label>
                      <Input
                        id="skill-category"
                        value={newSkill.category}
                        onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                        placeholder="e.g., Frontend, Backend"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleAddSkill} 
                    disabled={addSkillMutation.isPending}
                  >
                    {addSkillMutation.isPending ? "Adding..." : "Add Skill"}
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Skills</CardTitle>
                  <CardDescription>Manage your current skills</CardDescription>
                </CardHeader>
                <CardContent>
                  {skillsLoading ? (
                    <p className="text-center py-4">Loading skills...</p>
                  ) : skillsError ? (
                    <p className="text-center py-4 text-destructive">Error loading skills</p>
                  ) : skills.length === 0 ? (
                    <p className="text-center py-4 text-muted-foreground">No skills added yet.</p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Skill</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead className="w-[100px]">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {skills.map((skill: Skill) => (
                          <TableRow key={skill.id}>
                            <TableCell>{skill.name}</TableCell>
                            <TableCell>{skill.category}</TableCell>
                            <TableCell>
                              <Button 
                                variant="destructive" 
                                size="sm" 
                                onClick={() => handleDeleteSkill(skill.id)}
                                disabled={deleteSkillMutation.isPending}
                              >
                                Remove
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
                <CardDescription>View messages from people who contacted you</CardDescription>
              </CardHeader>
              <CardContent>
                {messagesLoading ? (
                  <p className="text-center py-4">Loading messages...</p>
                ) : messagesError ? (
                  <p className="text-center py-4 text-destructive">Error loading messages</p>
                ) : messages.length === 0 ? (
                  <p className="text-center py-4 text-muted-foreground">No contact messages yet.</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {messages.map((message: ContactMessage) => (
                        <TableRow key={message.id}>
                          <TableCell>{message.name}</TableCell>
                          <TableCell>{message.email}</TableCell>
                          <TableCell>{message.subject}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{message.message}</TableCell>
                          <TableCell>{formatDate(message.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
